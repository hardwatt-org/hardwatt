import {pb, refreshUserState} from "$lib/api/pocketbase";

export function load({}) {
    refreshUserState();

    return {
        setups: pb.collection('setups').getFullList()
    };
}
