import { API_HOST } from "apis/api";
import {
	SingleAlbumContentContainer,
	SingleAlbumDetailContainer,
	SingleAlbumDetailDescription,
	SingleAlbumDetailDescriptionContainer,
	SingleAlbumDetailImage,
	SingleAlbumDetailImageContainer,
	SingleAlbumDetailRightContainer,
	SingleAlbumDetailTitle,
	SingleAlbumDetailTitleContainer,
} from "./styled";

type DetailProps = {
	title: string;
	content: string;
	filepath: string;
};

const SingleAlbumDetail = ({ title, content, filepath }: DetailProps) => {
	return (
		<SingleAlbumDetailContainer>
			<SingleAlbumDetailImageContainer>
				<SingleAlbumDetailImage src={`${API_HOST}/${filepath}`} alt={title} width={300} height={400} />
			</SingleAlbumDetailImageContainer>
			<SingleAlbumDetailRightContainer>
				<SingleAlbumContentContainer>
					<SingleAlbumDetailTitleContainer>
						<SingleAlbumDetailTitle>{title}</SingleAlbumDetailTitle>
					</SingleAlbumDetailTitleContainer>
					<SingleAlbumDetailDescriptionContainer>
						<SingleAlbumDetailDescription>{content}</SingleAlbumDetailDescription>
					</SingleAlbumDetailDescriptionContainer>
				</SingleAlbumContentContainer>
			</SingleAlbumDetailRightContainer>
		</SingleAlbumDetailContainer>
	);
};

export default SingleAlbumDetail;
