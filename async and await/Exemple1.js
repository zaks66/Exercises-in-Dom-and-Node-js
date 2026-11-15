export async function data() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/ouchad97/cinetrack-api/main/cinetrack-data.json")
        if (!response.ok) {
            throw new Error("problem ! ")
        }
        const data = await response.json();
        return data
    }
    catch (error) {
        console.error("you have a", error.message)
    }

}