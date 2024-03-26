
exports.roledb = {

    "user": {
        "accounts": [3, 4, 6],
        "product": [2, 3],
        "orders": [1, 2, 3, 4, 5, 6],
        "cart": [1, 3, 4, 5],
        "delivery": [],
    },
    "admin": {
        "accounts": [2, 3, 4, 5, 6],
        "product": [2, 3, 6],
        "orders": [2, 3, 4, 5, 6],
        "cart": [],
        "delivery": [],
    },
    "vendor": {
        "accounts": [2, 3, 4, 6],
        "product": [1, 2, 3, 4, 5, 6],
        "orders": [],
        "cart": [],
        "delivery": [],
    }
}

// 1 - post 
// 2 - get All
// 3 - get One
// 4 - put 
// 5 - patch
// 6 - delete