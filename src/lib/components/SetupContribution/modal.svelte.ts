import type {SetupSpecification} from "$lib/models/input.type.js";

export const FormConfig = [
    {
        infoText: 'Power Consumption',
        gridLayout: 'md:grid-cols-[0.8fr_0.8fr_1fr_0.5fr]',
        inputFields: [
            {bindId: 'idle'},
            {bindId: 'load'},
            {bindId: 'measuringDevice'},
        ],
        selectFields: [
            {
                bindId: 'cState',
            },
        ]
    },
    {
        infoText: 'Processors',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {bindId: 'motherboard'},
            {bindId: 'cpu'},
            {bindId: 'cpuCooler'},
        ],
        toggleInputFields: [
            {bindId: 'gpu'}
        ]
    },
    {
        infoText: 'Storage & PSU',
        gridLayout: 'md:grid-cols-4',
        inputFields: [
            {bindId: 'ram'},
            {bindId: 'bootDrive'},
            {bindId: 'psu'},
        ],
        toggleInputFields: [
            {bindId: 'powerAdapter'},
        ]
    },
    {
        infoText: 'OS & Peripherals',
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
]

export const FormInputFields = {
    idle: {
        label: "Idle Power",
        type: 'number',
        placeholder: 'Type here',
        tooltip: 'in Watt',
        min: 0,
        steps: 0.1,
    },
    load: {
        label: "Load Power",
        type: 'number',
        placeholder: 'Type here',
        tooltip: 'in Watt',
        min: 0,
        steps: 0.1,
    },
    measuringDevice: {
        label: "Meas. Device",
        type: 'text',
        placeholder: 'Type here',
        tooltip: 'Brand + Model',
    },
    cState: {
        label: "C-State",
        options: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8', 'C9'],
    },
    motherboard: {
        label: "Motherboard",
        type: 'text',
        placeholder: 'Type here',
    },
    cpu: {
        label: "CPU",
        type: 'text',
        placeholder: 'Type here',
    },
    cpuCooler: {
        label: "CPU Cooler",
        type: 'text',
        placeholder: 'Type here',
    },
    gpu: {
        label: "GPU",
        type: 'text',
        placeholder: 'Type here',
        toggleLabelL: "iGPU",
        toggleLabelR: "dGPU"
    },
    ram: {
        label: "RAM",
        type: 'text',
        placeholder: 'Type here',
    },
    bootDrive: {
        label: "Boot Drive",
        type: 'text',
        placeholder: 'Type here',
    },
    psu: {
        label: "PSU",
        type: 'text',
        placeholder: 'Type here',
    },
    powerAdapter: {
        label: "Power Adapter",
        type: 'text',
        placeholder: 'Type here',
        toggleLabelL: "Power Adapter",
        toggleLabelR: ""
    },
    os: {
        label: "OS",
        type: 'text',
        placeholder: 'Type here',
    },
    mouse: {
        label: "Mouse",
        type: 'text',
        placeholder: 'Type here',
        toggleLabelL: "Mouse",
        toggleLabelR: ""
    },
    keyboard: {
        label: "Keyboard",
        type: 'text',
        placeholder: 'Type here',
        toggleLabelL: "Keyboard",
        toggleLabelR: ""
    },
    monitor: {
        label: "Monitor",
        type: 'text',
        placeholder: 'Type here',
        toggleLabelL: "Monitor",
        toggleLabelR: ""
    },
};

let initialFormValues: SetupSpecification = {
    idle: null,
    load: null,
    measuringDevice: "",
    cState: "",
    motherboard: "",
    cpu: "",
    cpuCooler: "",
    gpu: "",
    ram: "",
    bootDrive: "",
    psu: "",
    powerAdapter: "",
    os: "",
    mouse: "",
    keyboard: "",
    monitor: "",
    user: "",
}

export let FormValues = $state<SetupSpecification>({...initialFormValues});

export const resetForm = () => {
    Object.assign(FormValues, {...initialFormValues});
}
