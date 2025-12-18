# Required Setup After Cloning

This layout uses absolute paths such as `/favicon.gif`, `/css/style.css`, etc.

When hosted on GitHub Pages as a **project site**, the repository is served under
a folder path (for example `/10/`). Because of this, the site will not work
correctly immediately after cloning.

---

## REQUIRED: Run This Command Once After Cloning

Open a terminal **inside the cloned repository folder** and run the following
command exactly as shown:

```bash
python - <<'EOF'
import os, re

project = os.path.basename(os.getcwd())
prefix = f"/{project}/"

for root, _, files in os.walk("."):
    for name in files:
        if name.endswith((".html", ".css", ".js")):
            path = os.path.join(root, name)
            with open(path, "r", encoding="utf-8", errors="ignore") as f:
                data = f.read()

            new = re.sub(r'<base[^>]*>', '', data, flags=re.I)
            new = re.sub(r'(["\'])/(?!' + re.escape(project) + r'/)', r'\1' + prefix, new)

            if new != data:
                with open(path, "w", encoding="utf-8") as f:
                    f.write(new)
                print("Fixed:", path)

print("Done. Paths updated for GitHub Pages project hosting.")
EOF
```
