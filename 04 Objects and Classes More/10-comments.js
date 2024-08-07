function solve(input) {
    let users = [];
    let articles = [];
    let comments = {};

    input.forEach((line) => {
        if (line.startsWith('user')) {
            addUser(users, line);
        } else if (line.startsWith('article')) {
            addArticle(articles, line);
        } else if (line.includes('posts on')) {
            addComment(users, articles, comments, line);
        }
    })

    Object.entries(comments)
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(([article, data]) => {
            console.log(`Comments on ${article}`);
            
            data.sort((a, b) => a['user'].localeCompare(b['user']))
                .forEach(comm => console.log(`--- From user ${comm.user}: ${comm.commentTitle} - ${comm.commentContent}`));
        })

    function addUser(users, line) {
        const username = line.split(' ')[1];
        users.push(username);
    }

    function addArticle(articles, line) {
        const article = line.split(' ')[1];
        articles.push(article);
    }

    function addComment(users, articles, comments, line) {
        const [userArticle, data] = line.split(': ');
        const [user, article] = userArticle.split(' posts on ');
        const [commentTitle, commentContent] = data.split(', ');

        if (!users.includes(user) || !articles.includes(article)) {
            return;
        }

        if (!comments[article]) {
            comments[article] = [];
        }

        const comment = {user, commentTitle, commentContent}

        comments[article].push(comment);
    }
}

solve(['user aUser123', 'someUser posts on someArticle: NoTitle, stupidComment', 'article Books', 'article Movies', 'article Shopping', 'user someUser', 'user uSeR4', 'user lastUser', 'uSeR4 posts on Books: I like books, I do really like them', 'uSeR4 posts on Movies: I also like movies, I really do', 'someUser posts on Shopping: title, I go shopping every day', 'someUser posts on Movies: Like, I also like movies very much']);
solve(['user Mark', 'Mark posts on someArticle: NoTitle, stupidComment', 'article Bobby', 'article Steven', 'user Liam', 'user Henry', 'Mark posts on Bobby: Is, I do really like them', 'Mark posts on Steven: title, Run', 'someUser posts on Movies: Like']);