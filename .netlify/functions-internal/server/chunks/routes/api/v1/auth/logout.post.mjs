import { d as defineEventHandler } from '../../../../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';

const logout_post = defineEventHandler(() => {
  return {
    message: "Logged out successfully. Please discard your token."
  };
});

export { logout_post as default };
//# sourceMappingURL=logout.post.mjs.map
