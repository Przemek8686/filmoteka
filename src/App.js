import { Container } from './components/Container';
import {
  Tile,
  TileContent as Content,
  TileDescription as Description,
  TileImage as Image,
  TileTag as Tag,
  TileTags as Tags,
  TileTitle as Title,
  TileSubtitle as Subtitle
} from './components/Tile';
import poster from "./images/poster.png";

function App() {
  return (
    <Container>
      <Tile>
        <Image src={poster} alt="" />
        <Content>
          <Title>Mulan</Title>
          <Subtitle>2020</Subtitle>
          <Tags>
            <Tag>Action</Tag>
            <Tag>Action</Tag>
            <Tag>Action</Tag>
          </Tags>
          <Description>A young Chinese maiden disguises herself as a male warrior in order to save her father.
            Disguises herself as a male warrior in order to save her father.  A young Chinese maiden disguises herself as a male warrior in order to save her father.</Description>
        </Content>
      </Tile>
    </Container>
  );
}

export default App;
