import { useStyles } from './Header.styles';
import {
    Stack,
    Button,
    Avatar,
    Modal,
    useMantineTheme,
    Paper,
} from '@mantine/core';
import { H1, P } from '../Text';
import { useState } from 'react';
import { ContactModal } from './ContactModal';
import { screenSizes } from '../../styles/theme';
import { useMediaQuery } from '@mantine/hooks';

const Header = ({ withDescription }: { withDescription: boolean }) => {
    const { classes } = useStyles();

    const [opened, setOpened] = useState(false);
    const theme = useMantineTheme();
    const isSmallScreen = useMediaQuery(
        `(max-width: ${screenSizes.largeMobile}px)`,
    );

    return (
        <Paper
            shadow="xl"
            radius="md"
            p="md"
            withBorder
            className={classes.headerContainer}
        >
            <div className={classes.titleContainer}>
                <H1
                    variant="gradient"
                    gradient={{
                        from: 'black',
                        to: 'red',
                        deg: 45,
                    }}
                >
                    Oliver White
                </H1>
                {withDescription && (
                    <div className={classes.buttonContainer}>
                        <a
                            href="/files/OliverWhiteResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                size={isSmallScreen ? 'md' : 'lg'}
                                color="red"
                                compact={isSmallScreen}
                                variant="outline"
                            >
                                Download PDF Resume
                            </Button>
                        </a>

                        <Button
                            onClick={() => setOpened(true)}
                            size={isSmallScreen ? 'md' : 'lg'}
                            color="red"
                            compact={isSmallScreen}
                            variant="outline"
                        >
                            Contact
                        </Button>
                    </div>
                )}
            </div>
            {withDescription && (
                <>
                    <div className={classes.avatarContainer}>
                        <Avatar
                            radius="xl"
                            size="xl"
                            color="red"
                            src="images/author_.png"
                            alt="A picture of me!"
                            sx={{ img: { height: '84px', width: '84px' } }}
                        />
                        <P>
                            I am Oliver White and I am a Software Developer with
                            5 years of experience leading and contributing to a
                            wide variety of projects. I have a degree in
                            Computer Engineering with a specialization in
                            Software Engineering. I am experienced with many
                            different fields from computer hardware to
                            cloud-based software design!
                        </P>
                    </div>
                </>
            )}

            <Modal
                opened={opened}
                onClose={() => setOpened(false)}
                title="Contact"
                centered
                overlayProps={{
                    color: theme.colors.gray[2],
                    opacity: 0.7,
                    blur: 9,
                }}
            >
                <ContactModal />
            </Modal>
        </Paper>
    );
};

export { Header };
