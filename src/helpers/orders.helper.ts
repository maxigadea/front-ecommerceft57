

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(token: string, products: number[]) {
    try {
        const response = await fetch(`${API_URL}/orders`, {
            method: "POST",
            headers: {
                "Content-type":"application/json",
                Authorization: token
            },
            body: JSON.stringify({products})
        })
        alert("Product buy successfully")
        return response.json();
    } catch (error: any) {
        alert("An error ocurred")
        throw new Error(error)
    }
};

export async function getOrders(token: string) {
    try {
        const response = await fetch(`${API_URL}/users/orders`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                Authorization: token
            }
        })
        return response.json();
    } catch (error: any) {
        alert("An error ocurred")
        throw new Error(error)
    }
};
