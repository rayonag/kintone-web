import logError from './logError';

const handleCatch = (e: unknown, records?: any, functionName?: string) => {
    logError(e, records, functionName);
    if (e instanceof Error) {
        alert('Something went wrong. \n' + e.message);
    } else {
        alert('Something went wrong. Please report to IT Department.');
    }
};

export default handleCatch;
