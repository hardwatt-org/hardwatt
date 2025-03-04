import PocketBase from 'pocketbase';

export function load({}) {
    const pb = new PocketBase("https://pb.cacaoglass.duckdns.org");

    return {
        setups: pb.collection('setups').getFullList()
    };
}
