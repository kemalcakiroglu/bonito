// Kök layout tüm sayfalara lang="tr" basar. Statik çıktıda /en altındaki
// sayfaların <html lang> değerini "en" yapar (arama motorları ham HTML'i okur).
import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const out = "out";
const targets = [join(out, "en.html")];
const walk = (dir) => {
  for (const name of readdirSync(dir)) {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) walk(path);
    else if (name.endsWith(".html")) targets.push(path);
  }
};
walk(join(out, "en"));

let fixed = 0;
for (const file of targets) {
  const html = readFileSync(file, "utf8");
  const next = html.replace(/<html lang="tr"/, '<html lang="en"');
  if (next !== html) {
    writeFileSync(file, next);
    fixed++;
  }
}
console.log(`fix-html-lang: ${fixed} sayfa lang="en" yapıldı`);
