import { d as defineEventHandler } from '../../../../_/nitro.mjs';
import { g as getCurrentUser } from '../../../../_/auth.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'bcryptjs';
import 'jsonwebtoken';
import '../../../../_/db.mjs';
import 'pg';

const me_get = defineEventHandler(async (event) => {
  const currentUser = await getCurrentUser(event);
  return currentUser;
});

export { me_get as default };
//# sourceMappingURL=me.get.mjs.map
