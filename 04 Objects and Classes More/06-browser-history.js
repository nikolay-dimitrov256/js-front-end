function solve(browserData, commands) {
    const commandsMapper = {
        'Open': open,
        'Close': close,
    }

    for (const command of commands) {
        if (command === 'Clear History and Cache') {
            clearHistoryAndCache();
            continue;
        }

        const [action, site] = command.split(' ');
        response = commandsMapper[action](site);

        if (response) {
            browserData['Browser Logs'].push(command);
        }
    }

    console.log(browserData['Browser Name']);
    console.log(`Open Tabs: ${browserData['Open Tabs'].join(', ')}`);
    console.log(`Recently Closed: ${browserData['Recently Closed'].join(', ')}`)
    console.log(`Browser Logs: ${browserData['Browser Logs'].join(', ')}`);
    
    function clearHistoryAndCache() {
        browserData['Open Tabs'].length = 0;
        browserData['Recently Closed'].length = 0;
        browserData['Browser Logs'].length = 0;
    }

    function open(site) {
        browserData['Open Tabs'].push(site);

        return true;
    }

    function close(site) {
        if (!browserData['Open Tabs'].includes(site)) {
            return false;
        }

        index = browserData['Open Tabs'].indexOf(site);
        browserData['Open Tabs'].splice(index, 1);

        browserData['Recently Closed'].push(site);

        return true;
    }
}

solve({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
"Recently Closed":["Yahoo","Gmail"],
"Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
["Close Facebook", "Open StackOverFlow", "Open Google"]
);