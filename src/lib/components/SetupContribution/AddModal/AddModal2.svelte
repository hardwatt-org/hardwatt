<script lang="ts">
    import BaseAddModal from "$lib/components/SetupContribution/AddModal/BaseAddModal.svelte";

    let config = {
        modalId: 'AddModal2',
        nextModalId: 'AddModal3',
        prevModalId: 'AddModal1',
        infoText: '2/4: Processors',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {bindId: 'motherboard'},
            {bindId: 'cpu'},
            {bindId: 'cpuCooler'},
        ],
        toggleInputFields: [
            {bindId: 'gpu'}
        ]
    }
</script>

<BaseAddModal {...config}/>