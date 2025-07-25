# generate_md.py
import os

# ——— CONFIG ———
OUTPUT    = "ALL_CODE.md"
ROOT      = "."
INCLUDE_DIRS = {"src", "public"}           # only these folders
INCLUDE_FILES = {"package.json", "README.md", ".env", "tailwind.config.js"}
SKIP_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".ico", ".svg",
             ".mp4", ".woff", ".woff2", ".lock"}  # ignore binaries & lock files
LANG_MAP  = {
    ".js": "javascript", ".jsx": "javascript",
    ".ts": "typescript", ".tsx": "typescript",
    ".json": "json",    ".css": "css",
    ".html": "html",    ".md": "markdown",
    ".env": "",         ".yml": "yaml", ".yaml": "yaml",
    ".sh": "bash",      ".txt": ""
}
# —————————

def lang(ext): return LANG_MAP.get(ext, "")

with open(OUTPUT, "w", encoding="utf-8") as out:
    out.write("# All Project Files\n\n")
    # first: top‑level includes
    for fname in sorted(INCLUDE_FILES):
        if not os.path.exists(fname): continue
        ext = os.path.splitext(fname)[1]
        if ext in SKIP_EXTS: continue
        out.write(f"## `{fname}`\n\n```{lang(ext)}\n")
        out.write(open(fname, "r", encoding="utf-8", errors="ignore").read())
        out.write("\n```\n\n---\n\n")
    # then: walk only src/ and public/
    for d in INCLUDE_DIRS:
        for root, _, files in os.walk(d):
            for f in sorted(files):
                ext = os.path.splitext(f)[1]
                if ext in SKIP_EXTS or ext not in LANG_MAP: continue
                rel = os.path.join(root, f)
                out.write(f"## `{rel}`\n\n```{lang(ext)}\n")
                out.write(open(rel, "r", encoding="utf-8", errors="ignore").read())
                out.write("\n```\n\n---\n\n")
print(f"✅ {OUTPUT} generated.")
