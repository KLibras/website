import { Box, Button, Typography, Container } from '@mui/material';
import BlurText from "../components/BlurText";
import HeaderBar from '../components/HeaderBar';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <Box
            sx={{
                height: '100vh',
                overflowY: 'scroll',
                scrollSnapType: 'y mandatory',
                scrollBehavior: 'smooth',
                margin: 0,
                padding: 0,
            }}
        >
            
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#1C1C1C',
                    position: 'relative',
                    margin: 0,
                    padding: 0,
                }}
            >
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
                    <HeaderBar />
                </Box>

                <Container maxWidth="lg" sx={{ flex: 1, display: 'flex', alignItems: 'center' }}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                            width: '100%',
                        }}
                    >
                        
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            <BlurText
                                text="Você quer aprender libras?"
                                delay={150}
                                animateBy="words"
                                direction="top"
                                sx={{
                                    typography: { xs: 'h4', md: 'h2' },
                                    fontWeight: 'bold',
                                    color: '#FFFFFF',
                                    mb: 3,
                                }}
                            />

                            <Typography
                                variant="h5"
                                sx={{
                                    color: '#B8B8B8',
                                    mb: 4,
                                    fontWeight: 400,
                                }}
                            >
                                Venha aprender com <Box component="span" sx={{ color: '#DEBC32', fontWeight: 600 }}>KLibras</Box>
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#D1D1D1',
                                    mb: 5,
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    maxWidth: '500px',
                                    mx: { xs: 'auto', md: 0 },
                                }}
                            >
                                Reconhecimento por câmera, gamificação e feedback em tempo real para você dominar Libras de forma divertida e eficaz.
                            </Typography>

                            <Button
                                variant="contained"
                                href='https://drive.google.com/drive/folders/1mtbaeko4a-po7SBvQ2eWwM6VfVU9tm22?usp=sharing'
                                startIcon={<img src="/download.svg" alt="download" style={{ height: '24px', width: '24px' }} />}
                                sx={{
                                    color: '#000000',
                                    backgroundColor: '#DEBC32',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    py: 1.5,
                                    px: 4,
                                    border: 'none',
                                    '&:hover': {
                                        backgroundColor: '#C5A829',
                                    },
                                }}
                            >
                                Baixe agora
                            </Button>
                        </Box>

                
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src="/guy_chilling.png"
                                alt="Pessoa usando KLibras"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: '450px',
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>

            
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F5F5DC',
                    margin: 0,
                    padding: 0,
                    px: { xs: 4, md: 8 },
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                        }}
                    >
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#000000',
                                    mb: 3,
                                }}
                            >
                                Aprenda com Diversão
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#3A3A3A',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                KLibras torna o aprendizado de Libras uma experiência divertida e envolvente. 
                                Com exercícios interativos e feedback em tempo real, você aprende brincando.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src="/guy_dancing.png"
                                alt="Pessoa aprendendo Libras"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: '450px',
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>

           
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1C1C1C',
                    margin: 0,
                    padding: 0,
                    px: { xs: 4, md: 8 },
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                order: { xs: 2, md: 1 },
                            }}
                        >
                            <img
                                src="/screen.png"
                                alt="App mockup"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: '500px',
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, order: { xs: 1, md: 2 } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#FFFFFF',
                                    mb: 3,
                                }}
                            >
                                Reconhecimento por Câmera
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#D1D1D1',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    mb: 2,
                                }}
                            >
                                Nosso <Box component="span" sx={{ color: '#DEBC32', fontWeight: 600 }}>grande diferencial</Box> é a tecnologia de reconhecimento por câmera. 
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#D1D1D1',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                Pratique os sinais e receba feedback instantâneo sobre sua execução, 
                                garantindo um aprendizado correto e confiante.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

           
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#F5F5DC',
                    margin: 0,
                    padding: 0,
                    px: { xs: 4, md: 8 },
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 4,
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src="/guy_chair.png"
                                alt="Aprendizado flexível"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: '400px',
                                }}
                            />
                        </Box>

                        <Box sx={{ flex: 1, textAlign: 'center', px: { xs: 0, md: 4 } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#000000',
                                    mb: 3,
                                }}
                            >
                                Aprenda no Seu Ritmo
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#3A3A3A',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                Com KLibras, você tem total flexibilidade para aprender quando e onde quiser,
                                permitindo que você progrida no seu próprio tempo.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src="/girl_chilling.png"
                                alt="Progresso personalizado"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: '380px',
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>

            
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#1C1C1C',
                    margin: 0,
                    padding: 0,
                    px: { xs: 4, md: 8 },
                }}
            >
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: { xs: 'column', md: 'row' },
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            gap: 8,
                        }}
                    >
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#FFFFFF',
                                    mb: 3,
                                }}
                            >
                                Gamificação e Progresso
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#D1D1D1',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    mb: 2,
                                }}
                            >
                                Mantenha-se motivado com nosso sistema de ranking e pontos.
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#D1D1D1',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                }}
                            >
                                Acompanhe seu progresso em tempo real e celebre cada marco alcançado. 
                                Aprender Libras nunca foi tão fácil e divertido.
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <img
                                src="/girl_phone.png"
                                alt="Gamificação"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: '450px',
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Box>

            
            <Box
                sx={{
                    minHeight: '100vh',
                    width: '100vw',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    flexDirection: 'column',
                    backgroundColor: '#F5F5DC',
                    margin: 0,
                    padding: 0,
                }}
            >
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        px: 4,
                        py: 8,
                    }}
                >
                    <Container maxWidth="lg">
                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 'bold',
                                color: '#000000',
                                textAlign: 'center',
                                mb: 2,
                            }}
                        >
                            Pronto para começar?
                        </Typography>
                        <Typography
                            variant="h5"
                            sx={{
                                color: '#3A3A3A',
                                textAlign: 'center',
                                mb: 8,
                                fontWeight: 400,
                            }}
                        >
                            Junte-se a milhares de pessoas aprendendo Libras
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                gap: 6,
                                mb: 8,
                            }}
                        >
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    maxWidth: '280px',
                                }}
                            >
                                <img
                                    src="/girl_chilling2.png"
                                    alt="Conteúdo interativo"
                                    style={{
                                        width: '200px',
                                        height: 'auto',
                                        marginBottom: '20px',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#000000',
                                        mb: 1.5,
                                    }}
                                >
                                    Conteúdo Interativo
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#3A3A3A',
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Aprenda Libras e tenha feedback em tempo real
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    textAlign: 'center',
                                    maxWidth: '280px',
                                }}
                            >
                                <img
                                    src="/guy_phone.png"
                                    alt="Conteúdo estruturado"
                                    style={{
                                        width: '200px',
                                        height: 'auto',
                                        marginBottom: '20px',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#000000',
                                        mb: 1.5,
                                    }}
                                >
                                    Conteúdo Estruturado
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#3A3A3A',
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Conteúdo selecionado por nossa equipe
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    textAlign: 'center',
                                    maxWidth: '280px',
                                }}
                            >
                                <img
                                    src="/girl_phone2.png"
                                    alt="Comunidade"
                                    style={{
                                        width: '200px',
                                        height: 'auto',
                                        marginBottom: '20px',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#000000',
                                        mb: 1.5,
                                    }}
                                >
                                    Comunidade
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#3A3A3A',
                                        fontSize: '1rem',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Compita com outros usuários pelo primeiro lugar
                                </Typography>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}>
                            <Button
                                variant="contained"
                                href='https://drive.google.com/drive/folders/1mtbaeko4a-po7SBvQ2eWwM6VfVU9tm22?usp=sharing'
                                startIcon={<img src="/download.svg" alt="download" style={{ height: '24px', width: '24px' }} />}
                                sx={{
                                    mt: 4,
                                    color: '#000000',
                                    backgroundColor: '#DEBC32',
                                    borderRadius: '8px',
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    py: 1.8,
                                    px: 5,
                                    border: 'none',
                                    '&:hover': {
                                        backgroundColor: '#C5A829',
                                    },
                                }}
                            >
                                Baixe agora gratuitamente
                            </Button>
                        </Box>
                    </Container>
                </Box>

                <Box sx={{ width: '100%' }}>
                    <Footer />
                </Box>
            </Box>
        </Box>
    );
}