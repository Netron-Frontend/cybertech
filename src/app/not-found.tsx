'use client';

//global imports
import Image from 'next/image';

// images
import NotFoundShape from '../../public/images/NotFound/Shape branco.png';
import NotFoundArmor from '../../public/images/NotFound/armor.png';

//components
import NotFoundForm from '@/components/ui/NotFoundForm/NotFoundForm';

//styled
import { Description, DescriptionLow, NotFoundContainer, NotFoundLeft, NotFoundLeftRight, NotFoundRight, NotFoundText, PlaceBlock, PlaceBlockLow } from './NotFound.styled';

export default function NotFound() {
	return (
		<NotFoundContainer>
			<NotFoundLeft>
				<NotFoundLeftRight>
					<NotFoundText>4</NotFoundText>
					<Image src={NotFoundShape} alt={''} />
					<NotFoundText>4</NotFoundText>
				</NotFoundLeftRight>
				<Description>Что то пошло не так, страница не найдена...</Description>
				<DescriptionLow>Если ты попал сюда когда искал акцию, не беда! Назови промокод 404 администратору при регистрации и получи 200₽ на банас!</DescriptionLow>
			</NotFoundLeft>
			<NotFoundRight>
				<PlaceBlock>
					<PlaceBlockLow>
						<p style={{ color: '#fff', fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '30px', position: 'absolute', top: '30px', left: '66px' }}>Забронируй место!</p>
						<Image src={NotFoundArmor} alt={''} style={{ width: '470px', height: '490px', position: 'absolute', left: '340px', top: '45px', bottom: 0 }} />
						<NotFoundForm />
					</PlaceBlockLow>
				</PlaceBlock>
			</NotFoundRight>
		</NotFoundContainer>
	);
}
