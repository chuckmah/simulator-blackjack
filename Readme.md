simulator-bj 
=================





Prerequistes -  install typescript and ts-node globaly then setup visual studio code 

        {
            "type": "node",
            "request": "launch",
            "name": "Lancer le programme",
            "runtimeArgs": [
                "-r",
                "ts-node/register"
            ],
            "args": [
                "${workspaceFolder}/src/index.ts"
            ]
        }




development engine-blackjack using npm link

            cd [...]/engine-blackjack
            npm link
            cd [...]/simulator-bj
            npm link engine-blackjack
