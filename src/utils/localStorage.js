import { toast } from "react-toastify";

// Load all apps
export const loadApps = () => {
    try {
        const data = localStorage.getItem('appList');
        return data ? JSON.parse(data) : [];
    } catch (err) {
        console.log(err);
        return [];
    }
};

// Add an app to localStorage
export const updatedList = (app) => {
    const appList = loadApps();
    try {
        // Avoid duplicates
        const isDuplicate = appList.some(p => p.id === app.id);

        if (isDuplicate) {
            // toast("App already installed!");
            return; 
        }

        const updatedAppList = [...appList, app];
        localStorage.setItem('appList', JSON.stringify(updatedAppList));

    } catch (err) {
        console.log(err);
    }
};

// Remove an app
export const removeFromAppList = (id) => {
    const appList = loadApps();
    try {
        const updatedAppList = appList.filter(p => p.id !== id);
        localStorage.setItem('appList', JSON.stringify(updatedAppList));
    } catch (err) {
        console.log(err);
    }
};