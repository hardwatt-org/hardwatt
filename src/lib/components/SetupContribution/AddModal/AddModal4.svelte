<script>
 import BaseAddModal from "$lib/components/SetupContribution/AddModal/BaseAddModal.svelte";
    let config = {
        modalId: 'AddModal4',
        nextModalId: 'AddSummary',
        prevModalId: 'AddModal3',
        infoText: '4/4: OS & Peripherals',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {bindId: 'os'},
        ],
        toggleInputFields: [
            {bindId: 'mouse'},
            {bindId: 'keyboard'},
            {bindId: 'monitor'},
        ]
    }
</script>

<BaseAddModal {...config}/>