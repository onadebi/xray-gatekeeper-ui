const AppRoutes = () => {
    return {
        home: {
            home: '/',
            upload_report: {
                url:'/upload-report',
                title: 'Report upload'
            },          
            notFound: "/home/not-found"
        },
        
    }
}

export default AppRoutes;