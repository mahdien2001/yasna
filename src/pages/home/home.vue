<template>
<div>
    <div class="d-flex flex-column-reverse flex-md-row">
        <!-- article cards -->
        <div id="cards" class="col-12 col-md-9">
            <v-card v-for="article in articles.articles" :key="article.id" class="mx-auto my-10" color="light" max-width="90%">
                <v-card-actions>
                    <v-list-item class="grow">
                        <v-list-item-avatar color="grey darken-3">
                            <v-img class="elevation-6" alt="" :src="article.author.image"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{article.author.username}}</v-list-item-title>
                        </v-list-item-content>

                        <v-row align="center" justify="end">
                            <span class="subheading mr-2">{{new Date(article.createdAt).toLocaleString()}}</span>
                        </v-row>

                    </v-list-item>

                </v-card-actions>

                <v-card-title>
                    <span class="">{{article.description}}</span>
                </v-card-title>

                <v-card-text class="text-h7" style="white-space: pre-line">{{article.body}}</v-card-text>

            </v-card>
        </div>

        <!-- tags -->
        <div id="tags" class="col-11 col-md-3 mt-10 mx-auto">
            <v-card class="mt-3 pa-5">
                <v-chip-group active-class="deep-purple accent-4 white--text" column>
                    <v-chip draggable v-for="tag in tags" :key="tag" @click="filter(tag)">
                        {{tag}}
                    </v-chip>
                </v-chip-group>
            </v-card>
        </div>
    </div>
    <!-- pagination -->
    <div class="text-center my-10">
        <v-pagination v-model="page" :length="pages" @input="get_articles()"></v-pagination>
    </div>
</div>
</template>

<script src="./home.js"></script>
