import React from 'react';
import {BsInfoCircle, SiEthereum} from "react-icons/all";

const classes = 'flex justify-center items-center min-h-[70px] border-[0.5px] border-gray-400 text-sm font-light text-white'

const Welcome = () => {
    return (
        <div className="flex justify-center items-center w-full">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-1 justify-start flex-col md:mr-10">
                    <h2 className="text-3xl sm: text-5xl py-1 text-white bg-gradient-to-b">Send Crypto <br/> <span>across the world</span></h2>
                    <p className="text-white text-left mt-5 font-light md:w-9/12 w-11/12 text-base">Explore the crypto world. Buy and sell cryptocurrencies easily on KryptoFox.</p>
                    <button className="text-white text-base font-semibold flex flex-row justify-center items-center my-10 p-3 rounded-full cursor-pointer bg-blue-600 hover:bg-blue-700" type="button">
                        Connect Wallet
                    </button>

                    <div className="grid grid-cols-3 w-full">
                        <div className={`${classes} rounded-tl-2xl`}>Reliability</div>
                        <div className={`${classes}`}>Security</div>
                        <div className={`${classes} rounded-tr-2xl`}>Ethereum</div>
                        <div className={`${classes} rounded-bl-2xl`}>Web 3.0</div>
                        <div className={`${classes}`}>Low Fees</div>
                        <div className={`${classes} rounded-br-2xl`}>Blockchain</div>
                    </div>
                </div>

                <div className="flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10">
                    <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 gradient-bg-card">
                        <div className="flex justify-between flex-col w-full h-full">
                            <div className="flex justify-between items-start">
                                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                                    <SiEthereum fontSize={21} color="white" />
                                </div>
                                <BsInfoCircle fontSize={17} color="white"/>
                            </div>
                            <div>
                                <p className="text-white font-light text-sm">Address</p>
                                <p className="text-white font-semibold text-lg mt-1">Ethereum</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md p-5 sm:w-96 w-full flex flex-col justify-start items-center bg-gray-800">
                        <input type="text" placeholder="Address To" name="addressTo" className="my-2 p-2 w-full outline-none rounded-sm bg-gray-700 border-none text-sm text-white"/>
                        <input type="number" placeholder="Amount (ETH)" name="amount" className="my-2 p-2 w-full outline-none rounded-sm bg-gray-700 border-none text-sm text-white"/>
                        <input type="text" placeholder="Keyword (Gif)" name="keyword" className="my-2 p-2 w-full outline-none rounded-sm bg-gray-700 border-none text-sm text-white"/>
                        <input type="text" placeholder="Enter Message" name="message" className="my-2 p-2 w-full outline-none rounded-sm bg-gray-700 border-none text-sm text-white"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;