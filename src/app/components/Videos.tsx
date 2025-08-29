export default function Videos() {
    const videos = [
        { id: '1B', title: 'Antes e Depois - Edinan Deuner', src: 'https://www.youtube.com/embed/xMIPUhe-9v8' },
        { id: '2B', title: 'Antes e Depois - Fernando dos S.', src: 'https://www.youtube.com/embed/LCAEdVCD2mM' },
        { id: '3B', title: 'Antes e Depois - Marcia Duarte', src: 'https://www.youtube.com/embed/eXP0tDhFUQs' },
        { id: '4B', title: 'Antes e Depois - Eduardo Soler', src: 'https://www.youtube.com/embed/3UmTNH92gkI' }
    ];

    return (
        <div className="flex flex-col justify-center mb-16 px-4">
            <h1 className="font-bold leading-tight text-center text-white mb-16 text-3xl sm:text-4xl lg:text-5xl">
                Veja o que dizem nossos alunos:
            </h1>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full sm:w-3/4">
                    {videos.map((video) => (
                        <div key={video.id} className="flex flex-col items-center w-full">
                            <h2 className="text-white font-semibold mb-2">{video.title}</h2>
                            <div className="w-full h-52 lg:h-64 bg-gray-300">
                                <iframe 
                                    title={video.id} 
                                    className="w-full h-full" 
                                    src={video.src} 
                                    allow="autoplay" 
                                    loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
