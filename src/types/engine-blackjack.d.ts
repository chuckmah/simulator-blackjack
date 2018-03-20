/** Declaration file generated by dts-gen */

export class Game {
    constructor(initialState: any, ...args: any[]);

    canDouble(double: any, playerValue: any): any;

    dispatch(action: any): any;

    enforceRules(handInfo: any): any;

    getState(): any;

    setState(state: any): void;

}

export const constants: {
    DEAL: string;
    DEALER_HIT: string;
    DOUBLE: string;
    HIT: string;
    INSURANCE: string;
    INVALID: string;
    LEFT: string;
    RESTORE: string;
    RIGHT: string;
    SHOWDOWN: string;
    SPLIT: string;
    STAGE_DEALER_TURN: string;
    STAGE_DONE: string;
    STAGE_PLAYER_TURN_LEFT: string;
    STAGE_PLAYER_TURN_RIGHT: string;
    STAGE_READY: string;
    STAGE_SHOWDOWN: string;
    STAND: string;
    SURRENDER: string;
};

export namespace Game {
    namespace prototype {
        function canDouble(double: any, playerValue: any): any;

        function dispatch(action: any): any;

        function enforceRules(handInfo: any): any;

        function getState(): any;

        function setState(state: any): void;

        namespace canDouble {
            const prototype: {
            };

        }

        namespace dispatch {
            const prototype: {
            };

        }

        namespace enforceRules {
            const prototype: {
            };

        }

        namespace getState {
            const prototype: {
            };

        }

        namespace setState {
            const prototype: {
            };

        }

    }

}

export namespace actions {
    function deal(...args: any[]): any;

    function dealerHit(...args: any[]): any;

    function hit(_ref3: any): any;

    function insurance(_ref2: any): any;

    function invalid(action: any, info: any): any;

    function restore(): any;

    function showdown(...args: any[]): any;

    function split(): any;

    function stand(_ref5: any): any;

    function surrender(): any;

    namespace deal {
        const prototype: {
        };

    }

    namespace dealerHit {
        const prototype: {
        };

    }

    namespace hit {
        const prototype: {
        };

    }

    namespace insurance {
        const prototype: {
        };

    }

    namespace invalid {
        const prototype: {
        };

    }

    namespace restore {
        const prototype: {
        };

    }

    namespace showdown {
        const prototype: {
        };

    }

    namespace split {
        const prototype: {
        };

    }

    namespace stand {
        const prototype: {
        };

    }

    namespace surrender {
        const prototype: {
        };

    }

}

export namespace engine {
    function calculate(array: any): any;

    function checkForBusted(handValue: any): any;

    function countCards(array: any): any;

    function getHandInfo(playerCards: any, dealerCards: any, ...args: any[]): any;

    function getHandInfoAfterDeal(playerCards: any, dealerCards: any, initialBet: any): any;

    function getHandInfoAfterDouble(playerCards: any, dealerCards: any, initialBet: any, hasSplit: any): any;

    function getHandInfoAfterHit(playerCards: any, dealerCards: any, initialBet: any, hasSplit: any): any;

    function getHandInfoAfterInsurance(playerCards: any, dealerCards: any): any;

    function getHandInfoAfterSplit(playerCards: any, dealerCards: any, initialBet: any): any;

    function getHandInfoAfterStand(handInfo: any): any;

    function getHandInfoAfterSurrender(handInfo: any): any;

    function getHigherValidValue(handValue: any): any;

    function getLuckyLuckyMultiplier(playerCards: any, dealerCards: any): any;

    function getPrize(playerHand: any, dealerCards: any): any;

    function getPrizes(_ref: any): any;

    function getSideBetsInfo(availableBets: any, sideBets: any, playerCards: any, dealerCards: any): any;

    function isActionAllowed(actionName: any, stage: any): any;

    function isBlackjack(array: any): any;

    function isLuckyLucky(playerCards: any, dealerCards: any): any;

    function isNull(obj: any): any;

    function isNullOrUndef(obj: any): any;

    function isPerfectPairs(playerCards: any): any;

    function isSoftHand(array: any): any;

    function isSuited(...args: any[]): any;

    function isUndefined(obj: any): any;

    namespace calculate {
        const prototype: {
        };

    }

    namespace checkForBusted {
        const prototype: {
        };

    }

    namespace countCards {
        const prototype: {
        };

    }

    namespace getHandInfo {
        const prototype: {
        };

    }

    namespace getHandInfoAfterDeal {
        const prototype: {
        };

    }

    namespace getHandInfoAfterDouble {
        const prototype: {
        };

    }

    namespace getHandInfoAfterHit {
        const prototype: {
        };

    }

    namespace getHandInfoAfterInsurance {
        const prototype: {
        };

    }

    namespace getHandInfoAfterSplit {
        const prototype: {
        };

    }

    namespace getHandInfoAfterStand {
        const prototype: {
        };

    }

    namespace getHandInfoAfterSurrender {
        const prototype: {
        };

    }

    namespace getHigherValidValue {
        const prototype: {
        };

    }

    namespace getLuckyLuckyMultiplier {
        const prototype: {
        };

    }

    namespace getPrize {
        const prototype: {
        };

    }

    namespace getPrizes {
        const prototype: {
        };

    }

    namespace getSideBetsInfo {
        const prototype: {
        };

    }

    namespace isActionAllowed {
        const prototype: {
        };

    }

    namespace isBlackjack {
        const prototype: {
        };

    }

    namespace isLuckyLucky {
        const prototype: {
        };

    }

    namespace isNull {
        const prototype: {
        };

    }

    namespace isNullOrUndef {
        const prototype: {
        };

    }

    namespace isPerfectPairs {
        const prototype: {
        };

    }

    namespace isSoftHand {
        const prototype: {
        };

    }

    namespace isSuited {
        const prototype: {
        };

    }

    namespace isUndefined {
        const prototype: {
        };

    }

}

export namespace presets {
    function defaultState(rules: any): any;

    function getDefaultSideBets(...args: any[]): any;

    function getRules(_ref: any): any;

    namespace defaultState {
        const prototype: {
        };

    }

    namespace getDefaultSideBets {
        const prototype: {
        };

    }

    namespace getRules {
        const prototype: {
        };

    }

}

