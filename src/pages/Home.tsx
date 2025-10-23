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
                    backgroundColor: '#FFFFFF',
                    position: 'relative',
                    margin: 0,
                    padding: 0,
                }}
            >
                
                <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, zIndex: 10 }}>
                    <HeaderBar />
                </Box>

                
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        px: 2,
                        fontFamily: 'sans-serif',
                    }}
                >
                    <BlurText
                        text="Você quer aprender libras?"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        sx={{
                            typography: 'h3',
                            fontWeight: 'bold',
                        }}
                    />

                    <Typography
                        variant="h6"
                        sx={{
                            color: '#555',
                            mt: 2,
                        }}
                    >
                        Venha aprender com KLibras
                    </Typography>

                    <Box sx={{ mt: 6 }}>
                        <img
                            src="/screen.png"
                            alt="Logo"
                            style={{ width: '200px', height: 'auto' }}
                        />
                    </Box>

                    <Button
                        variant="outlined"
                        href='https://drive.google.com/drive/folders/1mtbaeko4a-po7SBvQ2eWwM6VfVU9tm22?usp=sharing'
                        startIcon={<img src="/download.svg" alt="download" style={{ height: '24px', width: '24px' }} />}
                        sx={{
                            mt: 6,
                            color: '#000000ff',
                            backgroundColor: '#DEBC32',
                            borderColor: '#000000ff',
                            borderRadius: '50px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            py: 1.5,
                            px: 4,
                            '&:hover': {
                                borderColor: '#000000ff',
                                backgroundColor: '#c7b56eff',
                            },
                        }}
                    >
                        Baixe agora
                    </Button>
                </Box>
            </Box>

          
            <Box
                sx={{
                    height: '100vh',
                    width: '100vw',
                    scrollSnapAlign: 'start',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#b3e7ffff', 
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
                            gap: 6,
                        }}
                    >
                        
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#2C2C2C',
                                    mb: 3,
                                }}
                            >
                                Aprenda com Diversão
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#2C2C2C',
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
                                    maxHeight: '400px',
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
                    backgroundColor: '#FFFFFF',
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
                            gap: 6,
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
                                src="/guy_phone.png"
                                alt="Reconhecimento por câmera"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    maxHeight: '400px',
                                }}
                            />
                        </Box>

                       
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' }, order: { xs: 1, md: 2 } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#2C2C2C',
                                    mb: 3,
                                }}
                            >
                                Reconhecimento por Câmera
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#555',
                                    fontSize: '1.1rem',
                                    lineHeight: 1.8,
                                    mb: 2,
                                }}
                            >
                                Nosso grande diferencial é a tecnologia de reconhecimento por câmera. 
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#555',
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
                    backgroundColor: '#8FE3CF', 
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
                                    maxHeight: '350px',
                                }}
                            />
                        </Box>

                        
                        <Box sx={{ flex: 1, textAlign: 'center', px: { xs: 0, md: 4 } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#2C2C2C',
                                    mb: 3,
                                }}
                            >
                                Aprenda no Seu Ritmo
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#2C2C2C',
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
                                    maxHeight: '350px',
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
                    backgroundColor: '#FFFFFF',
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
                            gap: 6,
                        }}
                    >
                        
                        <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: '#2C2C2C',
                                    mb: 3,
                                }}
                            >
                                Gamificação e Progresso
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    color: '#555',
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
                                    color: '#555',
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
                                    maxHeight: '400px',
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
                    backgroundColor: '#8edee9ff',
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
                            variant="h3"
                            sx={{
                                fontWeight: 'bold',
                                color: '#000000ff',
                                textAlign: 'center',
                                mb: 6,
                            }}
                        >
                            Pronto para começar?
                        </Typography>

                        {/* Three images in a row */}
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', md: 'row' },
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                gap: 6,
                                mb: 6,
                            }}
                        >
                            {/* Image 1 */}
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    maxWidth: '280px',
                                }}
                            >
                                <img
                                    src="/girl_chilling2.png"
                                    alt="Comunidade inclusiva"
                                    style={{
                                        width: '200px',
                                        height: 'auto',
                                        marginBottom: '16px',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#000000ff',
                                        mb: 1,
                                    }}
                                >
                                    Conteúdo interativo
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#030303ff',
                                        fontSize: '0.95rem',
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
                                    src="/guy_chilling.png"
                                    alt="Conteúdo estruturado"
                                    style={{
                                        width: '200px',
                                        height: 'auto',
                                        marginBottom: '16px',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#000000ff',
                                        mb: 1,
                                    }}
                                >
                                    Conteúdo Estruturado
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#000000ff',
                                        fontSize: '0.95rem',
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
                                    alt="Certificado"
                                    style={{
                                        width: '200px',
                                        height: 'auto',
                                        marginBottom: '16px',
                                    }}
                                />
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: '#000000ff',
                                        mb: 1,
                                    }}
                                >
                                    Comunidade
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: '#000000ff',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.6,
                                    }}
                                >
                                    Compita com outros usuário pelo primeiro lugar
                                </Typography>
                            </Box>
                        </Box>
                        <Box sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center'
                    }}>
                            <Button
                        variant="outlined"
                        href='https://drive.google.com/drive/folders/1mtbaeko4a-po7SBvQ2eWwM6VfVU9tm22?usp=sharing'
                        startIcon={<img src="/download.svg" alt="download" style={{ height: '24px', width: '24px' }} />}
                        sx={{
                            mt: 6,
                            color: '#000000ff',
                            backgroundColor: '#fdfdfdff',
                            borderColor: '#000000ff',
                            borderRadius: '50px',
                            textTransform: 'none',
                            fontWeight: 'bold',
                            fontSize: '1rem',
                            py: 1.5,
                            px: 4,
                            '&:hover': {
                                borderColor: '#000000ff',
                                backgroundColor: '#c7b56eff',
                            },
                        }}
                    >
                        Baixe agora
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