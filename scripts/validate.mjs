import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import { readFileSync, readdirSync } from "fs";

const load = (p) => JSON.parse(readFileSync(p, "utf8"));
const ajv = new Ajv2020({ strict: true, allErrors: true });
addFormats(ajv);

for (const f of readdirSync("schema").filter((f) => f.startsWith("section-"))) {
  ajv.addSchema(load(`schema/${f}`), `./${f}`);
}
const validate = ajv.compile(load("schema/register-entry.schema.json"));

let failed = 0;

// valid fixtures must validate
for (const f of readdirSync("examples").filter((f) => f.endsWith(".json"))) {
  const ok = validate(load(`examples/${f}`));
  console.log(`${ok ? "PASS" : "FAIL"}  examples/${f} — expected valid`);
  if (!ok) { console.error(validate.errors); failed++; }
}

// invalid fixtures must be rejected — a schema that never rejects is not a schema
for (const f of readdirSync("examples/invalid").filter((f) => f.endsWith(".json"))) {
  const ok = validate(load(`examples/invalid/${f}`));
  console.log(`${ok ? "FAIL" : "PASS"}  examples/invalid/${f} — expected invalid`);
  if (ok) { console.error("  schema accepted an entry that violates an interlock"); failed++; }
}

if (failed) { console.error(`\n${failed} failure(s)`); process.exit(1); }
console.log("\nAll fixtures behaved as specified.");
