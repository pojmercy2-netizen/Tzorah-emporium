import setupHandler from './v1/setup.mjs';
import '../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../../_/setup-db.mjs';
import '../../_/db.mjs';
import 'pg';
import '../../_/auth.mjs';
import 'bcryptjs';
import 'jsonwebtoken';



export { setupHandler as default };
//# sourceMappingURL=setup.mjs.map
