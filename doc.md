## solana rpc

https://api.mainnet-beta.solana.com

https://api.devnet.solana.com

http://localhost:8899

https://helius.xyz/

https://solana.com/docs/core/clusters

## generate jetv1 indexer

`jetv1: JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU`

```
npm run generate jetv1-idl JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU
```

https://docs.jetprotocol.io/jet-protocol/protocol/smart-contracts

https://explorer.solana.com/address/JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU/anchor-program

## raydium

Raydium 不是用 Anchor 來开发的，用了 native solana 方式

https://raydium.io/

https://docs.raydium.io/raydium/protocol/developers/addresses


## Orca

Orca 不是全部用 Anchor 來开发的


## Graphql Query Api

```
{
  time
}

{
  "data": {
    "time": "2024-03-06T07:11:47.486Z"
  }
}
```

```
{
  accounts { # 不支持分页
    name
    type
    address
    programId
  }
}

{
  "data": {
    "accounts": [{
        "name": "V3excUUNMqEzZQonWVnJhPfAomXDmS88NjSPrgKiRy3",
        "type": "Obligation",
        "address": "V3excUUNMqEzZQonWVnJhPfAomXDmS88NjSPrgKiRy3",
        "programId": "JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU"
      },
      {
        "name": "3Nm2WkTFo1rXTKAAbzLcMmFqAbad2Hd7dQFDfuy3h85S",
        "type": "Obligation",
        "address": "3Nm2WkTFo1rXTKAAbzLcMmFqAbad2Hd7dQFDfuy3h85S",
        "programId": "JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU"
      }
    ]
  }
}

```

```

{
  accounts(accounts: ["4pcTVnN9zg5dr2E96o4zgAKb3y7Rnmehpr763XxSmNH1"]) {
    name
    type
    address
    programId
  }
}

{
  "data": {
    "accounts": []
  }
}
```

```
{
  accounts(types: ["Obligation"]) {
    name
    type
    address
    programId
  }
}

....
```

```

{
  accountState(account: "JPv1rCqrhagNNmJVM5J1he7msQ5ybtvE1nNuHpDHMNU", blockchain: "solana", type: transaction) {
    blockchain
    type
    account
    indexer
    progress
    pending
    processed
  }
}

{
  "data": {
    "accountState": []
  }
}
```

```
{
  events(account: "4XiJAvDMM2Pc6rmar1bd5F7fhiQNJajWqJKFxtqohEBG", types: [Withdraw], limit: 1) {
    id
    timestamp
    type
    account
    signer
  }
}

{
  "data": {
    "events": [
      {
        "id": "4nd1NFQZDEQoHpRfmjgDeDyouRraW2BjaGjvPtkBgWF3FboDH7pyf4ZTppEGmrYPa1kZYonP5a7G8eG94XNK7y5P:05",
        "timestamp": 1642354524000,
        "type": "Withdraw",
        "account": "4XiJAvDMM2Pc6rmar1bd5F7fhiQNJajWqJKFxtqohEBG",
        "signer": "GFpNdXho1pkJFn1xiH3nXKLY5LqUq5T27b9ZY8dKkNRg"
      }
    ]
  }
}
```

```
{
  globalStats {
    totalAccesses
    totalAccessesByProgramId
  }
}

{
  "data": {
    "globalStats": {
      "totalAccesses": 16030,
      "totalAccessesByProgramId": {
        "5DdnXL9eYGS4AXLojiFkTybVwkSgDrxqRPzB1hJeZ3bD": 40,
        "BnztbEDijoTjCw1a7qiSCHe7jBCxrD4vJYvSptpdTo9P": 15129,
        "2ZixuuJXyZbkwbRTsLVXfEDaukEeoM2L9mfPCdHV249v": 31,
        "4pk84fPV9WCzquXPwrGmR1USqBBQ6VqJjReRtTmMeGDz": 18,
        "8bBZDqWfqrLaVEJnF9bVmce7pApA3mK4Bngk94iyhGwW": 9

      }
    }
  }
}
```

```shell
curl 'http://localhost:8080/?' \
  -H 'Accept: application/json' \
  -H 'Content-Type: application/json' \
  -H 'Origin: http://localhost:8080' \
  -H 'Referer: http://localhost:8080/' \
  --data-raw '{"query":"{\n  accounts {\n    name\n  }\n}\n","variables":null}'
```

```js
fetch("http://localhost:8080/?", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en,zh-CN;q=0.9,zh;q=0.8,ja;q=0.7,zh-TW;q=0.6,pl;q=0.5",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "Referer": "http://localhost:8080/",
    "Referrer-Policy": "origin"
  },
  "body": "{\"query\":\"{\\n  accounts {\\n    name\\n  }\\n}\\n\",\"variables\":null}",
  "method": "POST"
});

```