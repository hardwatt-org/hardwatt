import {pb} from "$lib/api/pocketbase";

export function load({}) {
    return {
        setups: pb.collection('setups').getFullList()
    };
}
