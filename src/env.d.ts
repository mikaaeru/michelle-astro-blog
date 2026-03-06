type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}

/// <reference path="../.astro/types.d.ts" />

type D1Database = import("@cloudflare/workers-types").D1Database;
type IncomingRequestCfProperties = import("@cloudflare/workers-types").IncomingRequestCfProperties;

declare namespace App {
	interface Locals {
		runtime: {
			env: {
				DB: D1Database;
			};
			cf: IncomingRequestCfProperties;
			ctx: import("@cloudflare/workers-types").ExecutionContext;
		};
	}
}