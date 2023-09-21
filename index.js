const checkbox = document.querySelector('ir-checkbox');
const select = document.querySelector('ir-select')
const data = [{
    text: "Alaskan/Hawaiian Time Zone",
    children: [{
        text: "Alaska",
        id: "AK",
    }, {
        text: "Hawaii",
        id: "HI",
    },
    ],
},
{
    text: "Pacific Time Zone",
    children: [{
        text: "California",
        id: "CA",
    }, {
        text: "Nevada",
        id: "NV",
    },
    {
        text: "Oregon",
        id: "OR",
    },
    {
        text: "Washington",
        id: "WA",
    },
    ],
},
{
    text: "Mountain Time Zone",
    children: [{
        text: "Arizona",
        id: "AZ",
    }, {
        text: "Colorado",
        id: "CO",
    },
    {
        text: "Idaho",
        id: "ID",
    },
    {
        text: "Montana",
        id: "MT",
    },
    {
        text: "Nebraska",
        id: "NE",
    },
    {
        text: "New Mexica",
        id: "NM",
    },
    {
        text: "North Dakota",
        id: "ND",
    }, {
        text: "Utah",
        id: "UT",
    }, {
        text: "Wyaoming",
        id: "WY",
    },
    ],
},
]
select.data = JSON.stringify(data)
// $(document).ready(function () {
//     $('.select2').select2();
// });
checkbox.addEventListener('oncheckchange', (e) => {
    console.log("checkbox", e.detail)
})
select.addEventListener("onselectchange", (e) => {
    console.log("select", e.detail)
    console.log(select.selectedItem)
})

