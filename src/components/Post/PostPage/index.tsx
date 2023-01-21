import React from 'react';
import {useParams} from "react-router-dom";
import StandartLayout from "../../../layouts/StandartLayout";

const PostPage = () => {
    const {id} = useParams()

    return (
        <StandartLayout localeUrl={`/Новости/${id}`}>
            <h1 className="text-3xl">Заголовок новости</h1>
            <div className=":[p]>py-3">
                <p className="py-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Orci ac auctor augue mauris augue neque gravida in fermentum. Imperdiet dui
                    accumsan sit amet nulla. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum.
                    Volutpat odio facilisis mauris sit. Sodales neque sodales ut etiam. Natoque penatibus et magnis dis
                    parturient. Pellentesque adipiscing commodo elit at imperdiet dui. Laoreet non curabitur gravida
                    arcu. Elit ut aliquam purus sit amet luctus venenatis. Velit aliquet sagittis id consectetur purus
                    ut faucibus pulvinar elementum. Vestibulum morbi blandit cursus risus at. Gravida rutrum quisque non
                    tellus orci. Nunc pulvinar sapien et ligula ullamcorper malesuada proin libero.
                </p>
                Nec ultrices dui sapien eget mi proin sed. Vehicula ipsum a arcu cursus. Vitae tortor condimentum
                lacinia quis vel eros donec ac. Metus dictum at tempor commodo ullamcorper a lacus vestibulum sed.
                Amet mauris commodo quis imperdiet. Fames ac turpis egestas sed tempus. Quisque sagittis purus sit
                amet volutpat consequat. Eros in cursus turpis massa tincidunt. Amet luctus venenatis lectus magna
                fringilla urna porttitor rhoncus. Etiam erat velit scelerisque in dictum non consectetur a erat.
                <p>
                    Tempus egestas sed sed risus. Sit amet commodo nulla facilisi nullam vehicula ipsum a. Eget aliquet
                    nibh praesent tristique magna sit amet. Velit ut tortor pretium viverra suspendisse potenti nullam
                    ac tortor. Purus in massa tempor nec feugiat. Ac turpis egestas sed tempus urna et pharetra pharetra
                    massa. Arcu dictum varius duis at consectetur lorem donec. Massa eget egestas purus viverra accumsan
                    in nisl nisi. Dictumst quisque sagittis purus sit amet volutpat consequat mauris. Commodo sed
                    egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Lobortis mattis aliquam
                    faucibus purus in massa. Urna et pharetra pharetra massa massa ultricies. Auctor neque vitae tempus
                    quam pellentesque nec nam. Nisi porta lorem mollis aliquam. Et netus et malesuada fames ac turpis.
                    Ut sem viverra aliquet eget sit. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis
                    rhoncus. Imperdiet nulla malesuada pellentesque elit eget gravida cum. Nam libero justo laoreet sit
                    amet cursus sit amet dictum.
                </p>
                <p>
                    Lacus luctus accumsan tortor posuere. Vitae auctor eu augue ut lectus arcu. Iaculis eu non diam
                    phasellus vestibulum lorem sed risus. Elementum facilisis leo vel fringilla est. Nulla posuere
                    sollicitudin aliquam ultrices sagittis orci a. Ut faucibus pulvinar elementum integer enim. Nam
                    libero justo laoreet sit amet cursus sit. Scelerisque fermentum dui faucibus in ornare quam. Et
                    molestie ac feugiat sed lectus. Et egestas quis ipsum suspendisse ultrices.
                </p>
                <p>
                    Suspendisse in est ante in nibh mauris. Adipiscing elit duis tristique sollicitudin. Nisl tincidunt
                    eget nullam non nisi est sit amet. At quis risus sed vulputate. Amet justo donec enim diam
                    vulputate. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Ipsum
                    dolor sit amet consectetur adipiscing elit duis tristique sollicitudin. Vitae elementum curabitur
                    vitae nunc sed velit dignissim. Sed egestas egestas fringilla phasellus faucibus scelerisque.
                    Aliquam eleifend mi in nulla posuere. Tristique senectus et netus et malesuada fames ac. Tellus
                    molestie nunc non blandit massa. Ut morbi tincidunt augue interdum. Volutpat consequat mauris nunc
                    congue nisi. Quis hendrerit dolor magna eget est lorem ipsum dolor. Ut venenatis tellus in metus.
                    Viverra ipsum nunc aliquet bibendum enim. Blandit volutpat maecenas volutpat blandit aliquam etiam
                    erat velit scelerisque. Felis eget nunc lobortis mattis aliquam faucibus. Molestie a iaculis at erat
                    pellentesque adipiscing commodo elit at.
                </p>
            </div>

        </StandartLayout>
    );
};

export default PostPage;