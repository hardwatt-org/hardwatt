import { pb } from "$lib/api";
import { refreshUserState } from "$lib/auth.svelte";
import type { SetupRecord } from "$lib/api/types";

export function load({ fetch, depends }) {
    refreshUserState();

    depends("app:setups");

    return {
        setups: pb.collection('setups').getFullList<SetupRecord>({
            fetch: fetch,
            sort: "-status,idle",
            requestKey: null
        })
    };
}
