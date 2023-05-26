import ghpages from 'gh-pages';

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/Hukasx0/portfolio.git',
        user: {
            name: 'Hukasx0',
            email: 'hubertkasp13@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)