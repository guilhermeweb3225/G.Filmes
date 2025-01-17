import React, { useEffect } from 'react';
import Swiper from 'swiper';
import './Slide.css'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slide() {
    useEffect(() => {
        // Inicializa o Swiper após o componente ser montado
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: '.button-next',
                prevEl: '.button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }, []);

    return (
        <div className="box-1">
            <div className="swiper box-2">
                <div className="swiper-wrapper">
                    <div className="swiper-slide">
                        <div className="box-img">
                            <img src="https://wallpapers.com/images/featured/alice-in-borderland-79olr58iub9u7zbl.jpg" alt="" />
                        </div>
                    </div>
                    {/* Repetir os slides conforme necessário */}
                    <div className="swiper-slide">
                        <div className="box-img">
                            <img src="https://lunetas.com.br/wp-content/uploads/2023/07/5-brincadeiras-inspiradas-em-filmes-para-fazer-com-as-criancas-portal-lunetas.jpg" alt="" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box-img">
                            <img src="https://i.pinimg.com/originals/e0/72/85/e072857792d81d38534a7847d7b73add.jpg" alt="" />
                        </div>
                    </div>
                    {/* Repetir os slides conforme necessário */}
                    <div className="swiper-slide">
                        <div className="box-img">
                            <img src="https://wallpapers.com/images/hd/2560-x-1440-movie-2560-x-1440-h61pu1s2zq4tya3x.jpg" alt="" />
                        </div>
                    </div>
                    <div className="swiper-slide">
                        <div className="box-img">
                            <img src="https://img.odcdn.com.br/wp-content/uploads/2024/07/Design-sem-nome-10-1-scaled.jpg" alt="" />
                        </div>
                    </div>
                    {/* Repetir os slides conforme necessário */}
                    <div className="swiper-slide">
                        <div className="box-img">
                            <img src="https://wallpapers.com/images/hd/2560-x-1440-movie-2560-x-1440-nu9uwnbv6lcix4c7.jpg" alt="" />
                        </div>
                    </div>
                    {/* Mais slides... */}
                </div>
                {/* Botões de navegação */}
                <div className="button-next">{'>'}</div>
                <div className="button-prev">{'<'}</div>
            </div>
        </div>
    );
}

export default Slide;
