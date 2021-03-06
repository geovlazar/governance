// Dependencies needed by multiple modules in this library; if a dependency
// is required only for a single module, those will be in <module>/deps.ts
// subdirectory

export * as fs from "https://deno.land/std@0.74.0/fs/mod.ts";
export * as path from "https://deno.land/std@0.74.0/path/mod.ts";
export * as docopt from "https://denopkg.com/Eyal-Shalev/docopt.js@v1.0.1/src/docopt.ts";
export * as governedInstr from "https://denopkg.com/gov-suite/governed-instrument@v0.7.7/core/mod.ts";
export * as govnDataCLI from "https://denopkg.com/gov-suite/governed-structured-data@v0.7.1/cli.ts";
export * as govnData from "https://denopkg.com/gov-suite/governed-structured-data@v0.7.1/mod.ts";
export * as serializeJS from "https://denopkg.com/shah/javascript-stringify@v2.0.4/src/index.ts";
export * as serializeJsStringify from "https://denopkg.com/shah/javascript-stringify@v2.0.4/src/stringify.ts";
export * as serializeJsTypes from "https://denopkg.com/shah/javascript-stringify@v2.0.4/src/types.ts";
export * as inflect from "https://denopkg.com/shah/text-inflect@v1.0.4/mod.ts";
// export * as inspect from "https://denopkg.com/shah/ts-inspect@v0.8.5/mod.ts";
// export * as inspText from "https://denopkg.com/shah/ts-inspect@v0.8.5/text/mod.ts";
// export * as nihLhcForms from "https://denopkg.com/shah/ts-lhncbc-lforms@v2.0.5/mod.ts";
export * as inspect from "../../shah/ts-inspect/mod.ts";
export * as inspText from "../../shah/ts-inspect/text/mod.ts";
export * as nihLhcForms from "../../shah/ts-lhncbc-lforms/mod.ts";
export * as safety from "https://denopkg.com/shah/ts-safety@v0.3.0/mod.ts";
export * as safeHttpClient from "../../shah/ts-safe-http-client/core/mod.ts";
