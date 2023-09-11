import * as React from 'react';
import { Button, Paper, Space } from '@mantine/core';
import {
    BrandGithub,
    BrandLinkedin,
    MailFast,
    FilePower,
} from 'tabler-icons-react';
import { Header } from '../components/Header/Header';
import dynamic from 'next/dynamic';

const Linktree = () => {
    return (
        <>
            <Header withDescription={false} />
            <Space h="lg" />
            <Paper shadow="xl" radius="md" p="md" withBorder>
                <Button.Group orientation="vertical">
                    <Button
                        leftIcon={<FilePower />}
                        color="red"
                        variant="outline"
                        component="a"
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Resume
                    </Button>
                    <Button
                        leftIcon={<BrandGithub />}
                        color="gray"
                        variant="outline"
                        component="a"
                        href="https://github.com/oliverwhite19"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </Button>
                    <Button
                        leftIcon={<BrandLinkedin />}
                        color="grape"
                        variant="outline"
                        component="a"
                        href="https://www.linkedin.com/in/oliver-white-453a1221a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </Button>
                    <Button
                        leftIcon={<MailFast />}
                        color="orange"
                        variant="outline"
                        component="a"
                        href="mailto:oliverwhite93@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Email
                    </Button>
                </Button.Group>
            </Paper>
        </>
    );
};

export default dynamic(() => Promise.resolve(Linktree), {
    ssr: false,
});
