import { pb } from "$lib/api";
import { refreshUserState } from "$lib/auth.svelte";
import type { SetupRecord } from "$lib/api/types";

export function load({}) {
    refreshUserState();

    return {
        setups: pb.collection('setups').getFullList<SetupRecord>({
            sort: "-status,idle",
            requestKey: null
        })
    };
}
