import { createClient } from "@supabase/supabase-js";
import { createPlugin } from "@ubiquity-os/ubiquity-os-kernel";
import manifest from "../manifest.json";
import { createAdapters } from "./adapters";
import { run } from "./run";
import { SupportedEvents } from "./types/context";
import { Database } from "./types/database";
import { Env } from "./types/env";
import { PluginSettings } from "./types/plugin-input";

export default createPlugin<PluginSettings, Env, SupportedEvents>(
  (context) => {
    const supabase = createClient<Database>(context.env.SUPABASE_URL, context.env.SUPABASE_KEY);
    return run({ ...context, adapters: createAdapters(supabase, context) });
  },
  // @ts-expect-error strings cannot be assigned to events
  manifest
).then((app) => ({
  fetch: app.fetch,
}));
