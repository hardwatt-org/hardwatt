<script>
    import BaseAddModal from "$lib/components/SetupContribution/AddModal/BaseAddModal.svelte";

    let config = {
        modalId: 'AddModal3',
        nextModalId: 'AddModal4',
        prevModalId: 'AddModal2',
        infoText: '3/4: Storage & PSU',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {bindId: 'ram'},
            {bindId: 'bootDrive'},
            {bindId: 'psu'},
        ],
        toggleInputFields: [
            {bindId: 'powerAdapter'},
        ]
    }
</script>

<BaseAddModal {...config}/>