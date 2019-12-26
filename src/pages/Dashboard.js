
import React from 'react';
import app from '../firebaseFolder/firebase';


//grommet işlevleri
import {
    Box,
    Grommet,
    Anchor,
    Grid,
    Text,
    Button,
    Image,
    Heading,
    ResponsiveContext,
    Paragraph,
    grommet
} from 'grommet';
import {
    Favorite,
    Home,
    Reactjs,
    UserSettings,
    Inbox,
    Android,
    Apple,
    ClosedCaption,
    Logout
} from 'grommet-icons';

//grommet control işlevleri
import {
    Avatar,
    Header,
    Sidebar,
    Tag,
    VerticalMenu,
    Card,
    IconButton
} from 'grommet-controls';


const Section = ({ children, name }) => (
    <Box
        tag='section'
        pad={{ vertical: 'medium', horizontal: 'xlarge' }}
    >
        <Heading level={2} margin={{ top: 'none' }} alignSelf='center'>
            {name}
        </Heading>
        {children}
    </Box>
);

const services = [
    { name: '@ahmet', color: 'accent-1', icon: Reactjs },
    { name: '@anonim', color: 'accent-2', icon: Android },
    { name: '@suna', color: 'accent-3', icon: Apple },
    { name: '@ebru', color: 'accent-4', icon: ClosedCaption },
];

export const MerakliyizDashboard = () => {
    return (
        <Grommet theme={grommet}>
            <ResponsiveContext.Consumer>
                {responsiveSize => (
                    <Box>
                        <Header
                            position='sticky'
                        >
                            <Box direction='row' gap='small' align='center'>
                                {responsiveSize !== 'small' && (
                                    <Heading level={3} margin='none'>
                                        merakliyiz.com
                    </Heading>
                                )}
                            </Box>
                            <small><Button icon={<Logout />} onClick={() => app.auth().signOut()} /></small>
                        </Header>
                        <Box>
                            <Box direction='row'>
                                <Sidebar
                                    title='Menu'
                                    width='250px'
                                >
                                    <Box overflow='auto'>
                                        <VerticalMenu
                                            activeItem={{ id: 'home' }}
                                            items={[
                                                {
                                                    id: 'home',
                                                    href: '#dash',
                                                    label: 'Dashboard',
                                                    icon: <Home />,
                                                },
                                                //   {
                                                //     id: 'dashboards',
                                                //     label: 'Dashboards',
                                                //     icon: <Dashboard />,
                                                //     items: [
                                                //       {
                                                //         id: 'budget',
                                                //         href: '/budget',
                                                //         label: 'Budget',
                                                //         widget: <LineChart />,
                                                //       },
                                                //       {
                                                //         id: 'expenses',
                                                //         href: '/expenses',
                                                //         label: 'Expenses',
                                                //         widget: <BarChart  />,
                                                //       },
                                                //     ],
                                                //   },
                                                {
                                                    id: 'messages',
                                                    href: '/sorular',
                                                    label: 'Gelen Cevaplar',
                                                    icon: <Inbox />,
                                                    widget: <Tag round='small' border='all' pad={{ horizontal: 'small' }} label='4' />,
                                                },
                                                {
                                                    id: 'settings',
                                                    href: '/settings',
                                                    label: 'Ayarlar',
                                                    icon: <UserSettings />,
                                                },
                                            ]}
                                        />
                                    </Box>
                                </Sidebar>
                                <Box id="dash" flex gap='large' fill='horizontal'>
                                    <Section name='Herkes Tarafından görülen Sorular'>
                                        <Grid columns='medium' gap='medium'>
                                            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                                <Card key={`blogs_${index}`}>
                                                    <Anchor href='https://www.imdb.com/title/tt2911666/' style={{ maxWidth: '100%' }}>
                                                        <Box>
                                                            <Box basis='small' flex={false}>
                                                                <Image
                                                                    fit='cover'
                                                                    src={`https://picsum.photos/g/600/200/?image=${200 + index}`}
                                                                />
                                                            </Box>
                                                        </Box>
                                                    </Anchor>
                                                    <Card.CardContent align='center'>
                                                        <Anchor path='https://www.imdb.com/title/tt2911666/'>
                                                            <Heading level={3} margin='none'>
                                                                John Wick
                                </Heading>
                                                        </Anchor>
                                                        <Paragraph
                                                            size='small'
                                                            style={{
                                                                display: '-webkit-box',
                                                                WebkitLineClamp: '5',
                                                                WebkitBoxOrient: 'vertical',
                                                                overflow: 'hidden',
                                                            }}
                                                        >
                                                            Legendary assassin retired from his violent career after marrying the love of his life.
                                                            Her sudden death leaves John in deep mourning and when sadistic mobster Iosef Tarasov and his thugs
                                                            steal John's prized car and kill the puppy that was a last gift from his wife,
                                                            John unleashes the remorseless killing machine within and seeks vengeance.
                              </Paragraph>
                                                        <Box direction='row' justify='between' pad={{ vertical: 'small', horizontal: 'medium' }} fill='horizontal'>
                                                            <Avatar
                                                                image={`https://picsum.photos/g/200/200?image=${100 + index}`}
                                                                title='John Doe'
                                                                subTitle='15 min. ago'
                                                            />
                                                            <IconButton icon={<Favorite />} onClick={() => alert('Great post')} />
                                                        </Box>
                                                    </Card.CardContent>
                                                </Card>
                                            )
                                            )}
                                        </Grid>
                                    </Section>
                                    <Section name='En çok cevaplayan kişiler'>
                                        <Grid columns={{ "count": "fit", size: 'small' }} gap='large' alignContent='center'>
                                            {services.map((item, index) => (
                                                <Card key={`services_${index}`}>
                                                    <Box direction='row' fill align='center' pad='small' gap='small'>
                                                        <Box background={item.color} flex={false} pad='small'>
                                                            <item.icon size='xlarge' />
                                                        </Box>
                                                        <Box justify='between' gap='small'>
                                                            <Text size='large' weight='bold' >
                                                                {item.name}
                                                            </Text>
                                                            <Text size='small'>
                                                                {item.name} kullanıcısı için
                                                            </Text>
                                                            <Anchor label='profilini gör...' />
                                                        </Box>
                                                    </Box>
                                                </Card>
                                            )
                                            )}
                                        </Grid>
                                    </Section>
                                    <br/>
                                    <br/>
                                    <br/>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
};

export default MerakliyizDashboard;