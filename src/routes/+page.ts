import {pb, refreshUserState} from "$lib/api/pocketbase";
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
