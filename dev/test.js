const Blockchain = require( './blockchain' );
const bitcoin = new Blockchain();


const bc1 = {
    "chain": [
        {
            "index": 1,
            "timestamp": 1631254475279,
            "transactions": [],
            "nonce": 100,
            "hash": "0",
            "previousBlockHash": "0"
        },
        {
            "index": 2,
            "timestamp": 1631254496872,
            "transactions": [],
            "nonce": 18140,
            "hash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
            "previousBlockHash": "0"
        },
        {
            "index": 3,
            "timestamp": 1631254512329,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "5ee0a9f011fe11eca7114b77cdb36d4c",
                    "transactionId": "6bc1534011fe11eca7114b77cdb36d4c"
                },
                {
                    "amount": 100,
                    "sender": "LALSAI38DKSLA2LZLAMN9WSP",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "6ec607c011fe11eca3ca5937a924bd89"
                },
                {
                    "amount": 200,
                    "sender": "LALSAI38DKSLA2LZLAMN9WSP",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "70b3a6f011fe11eca3ca5937a924bd89"
                },
                {
                    "amount": 500,
                    "sender": "LALSAI38DKSLA2LZLAMN9WSP",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "732e6af011fe11eca3ca5937a924bd89"
                }
            ],
            "nonce": 6374,
            "hash": "00005486616b7a2fae74ece943bf966ffe28e686e05775bddb26b0a7b6c0d3d5",
            "previousBlockHash": "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100"
        },
        {
            "index": 4,
            "timestamp": 1631254597921,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "5ee0a9f011fe11eca7114b77cdb36d4c",
                    "transactionId": "74f6cee011fe11eca7114b77cdb36d4c"
                },
                {
                    "amount": 40,
                    "sender": "LALSAI38DKSLA2LZLAMN9WSP",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "9c9e7b0011fe11eca3ca5937a924bd89"
                },
                {
                    "amount": 50,
                    "sender": "LALSAI38DKSLA2LZLAMN9WSP",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "9edbe7e011fe11eca3ca5937a924bd89"
                },
                {
                    "amount": 70,
                    "sender": "LALSAI38DKSLA2LZLAMN9WSP",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "a14016a011fe11eca3ca5937a924bd89"
                },
                {
                    "amount": 80,
                    "sender": "LALSAI38DKSLA2LZLAMN9WSP",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "a3ee1fa011fe11eca3ca5937a924bd89"
                }
            ],
            "nonce": 67296,
            "hash": "000098aaeac5ae6d10b50babb6dfff9b157f7f56422ac3a142809969b36bc26c",
            "previousBlockHash": "00005486616b7a2fae74ece943bf966ffe28e686e05775bddb26b0a7b6c0d3d5"
        },
        {
            "index": 5,
            "timestamp": 1631254647395,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "5ee0a9f011fe11eca7114b77cdb36d4c",
                    "transactionId": "a7fbb8a011fe11eca7114b77cdb36d4c"
                }
            ],
            "nonce": 24542,
            "hash": "0000300cfb4a87a216c98c36d6f72ed0d0a2c5d132d8a583c72c8cef48e714da",
            "previousBlockHash": "000098aaeac5ae6d10b50babb6dfff9b157f7f56422ac3a142809969b36bc26c"
        },
        {
            "index": 6,
            "timestamp": 1631254681768,
            "transactions": [
                {
                    "amount": 12.5,
                    "sender": "00",
                    "recipient": "5ee0a9f011fe11eca7114b77cdb36d4c",
                    "transactionId": "c578b3b011fe11eca7114b77cdb36d4c"
                },
                {
                    "amount": 1001,
                    "sender": "LALSAI38DKSLA2LZLAMN9WSP",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "cc84236011fe11eca3ca5937a924bd89"
                },
                {
                    "amount": 1001,
                    "sender": "PPER8KALD0LA,ZXE",
                    "recipient": "OL48MZNCWIEUKSDLALSD",
                    "transactionId": "d6d8075011fe11eca3ca5937a924bd89"
                }
            ],
            "nonce": 58765,
            "hash": "00002aa0592b129b55d183140d8251aeca41d2d77e5c00ac35a43a3c3191e0aa",
            "previousBlockHash": "0000300cfb4a87a216c98c36d6f72ed0d0a2c5d132d8a583c72c8cef48e714da"
        }
    ],
    "pendingTransactions": [
        {
            "amount": 12.5,
            "sender": "00",
            "recipient": "5ee0a9f011fe11eca7114b77cdb36d4c",
            "transactionId": "d9f54ce011fe11eca7114b77cdb36d4c"
        }
    ],
    "currentNodeUrl": "http://localhost:3001",
    "networkNodes": [
        "http://localhost:3004",
        "http://localhost:3002",
        "http://localhost:3003"
    ]
};




console.log( 'VALID: ', bitcoin.chainIsValid( bc1.chain ) );









