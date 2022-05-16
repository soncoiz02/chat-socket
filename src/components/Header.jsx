import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import { Avatar, Button, styled, Typography } from '@mui/material'
import { blueGrey } from '@mui/material/colors'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const UserWrapper = styled('div')`
    display: flex;
    align-items: center;
    padding: 5px 15px;
    gap: 0 5px;
    background-color: rgba(255,255,255,0.8);
    border-radius: 50px;
    box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.1);
    margin-bottom: 20px;
`

const ActionWrapper = styled('div')`
    display: flex;
    align-items: center;
    gap: 0 5px;
`

const HomeIconBtn = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    transition: 0.3s;
    &:hover {
        background-color: rgba(255,255,255,0.8);
        box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.1);
    }
`

const LogoutButton = styled(Button)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50px;
    transition: 0.3s;
    &:hover {
        background-color: rgba(255,255,255,0.8);
        box-shadow: 0px 3px 10px 1px rgba(0,0,0,0.1);
    }
`

const Header = () => {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <UserWrapper>
                <Avatar sx={{
                    width: 50,
                    height: 50,
                }}
                    src="https://img.freepik.com/free-vector/happy-shiba-inu-dog-japan-cartoon-vector-icon-illustration-animal-nature-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3650.jpg?t=st=1652670641~exp=1652671241~hmac=c74d5597d48253915d6be3ad706d24750af9594edca741110420b5b3ba0b65de&w=740"
                />
                <Typography sx={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: blueGrey[600],
                }}>Username</Typography>
            </UserWrapper>
            <ActionWrapper>
                <HomeIconBtn to="/" >
                    <HomeIcon
                        sx={{
                            color: blueGrey[700],
                            fontSize: 25,
                        }}
                    />
                </HomeIconBtn>
                <LogoutButton>
                    <LogoutIcon
                        sx={{
                            color: blueGrey[700],
                            fontSize: 25,
                        }}
                    />
                </LogoutButton>
            </ActionWrapper>
        </Box>
    )
}

export default Header