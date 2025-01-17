// refer to own sources for ease of development
import { main, file, task } from "../dnit.ts";
import * as utils from "../utils.ts";

import * as flags from "https://deno.land/std@0.117.0/flags/mod.ts";
import * as path from "https://deno.land/std@0.117.0/path/mod.ts";
import * as log from "https://deno.land/std@0.117.0/log/mod.ts";
import * as fs from "https://deno.land/std@0.117.0/fs/mod.ts";
import * as hash from "https://deno.land/std@0.117.0/hash/mod.ts";
import * as semver from "https://deno.land/x/semver@v1.4.0/mod.ts";

export { main, file, flags, fs, hash, log, path, semver, task, utils };
