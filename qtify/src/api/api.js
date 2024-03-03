export const BACKEND_POINT = 'https://qtify-backend-labs.crio.do';

// Fetch top songs from the backend
export async function fetchTopSongs() {
    const apiUrl = `${BACKEND_POINT}/albums/top`;
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            throw new Error('Failed to fetch top songs');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching top songs:', error);
       
        throw error;
    }
}

// Fetch new songs from the backend
export async function fetchNewSongs() {
    const apiUrl = `${BACKEND_POINT}/albums/new`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch new songs');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching new songs:', error);
       
        throw error;
    }

    
}

export async function fetchSongs() {
    const apiUrl = `${BACKEND_POINT}/songs`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch  songs');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching  songs:', error);
       
        throw error;
    }
}

export async function fetchGenres() {
    const apiUrl = `${BACKEND_POINT}/genres`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch genres');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching genres:', error);
       
        throw error;
    }
}

export async function fetchFaqs() {
    const apiUrl = `${BACKEND_POINT}/faq`;
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch FAQs');
        }
        return response.json();
    } catch (error) {
        console.error('Error fetching FAQs:', error);
       
        throw error;
    }
}