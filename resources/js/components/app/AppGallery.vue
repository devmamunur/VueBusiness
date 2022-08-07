<template>
  <div class="project-gallery" id="project-gallery">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="project-gallery-filter d-flex justify-content-center">
            <ul class="project-gallery-menu d-inline-block">
                <li class="filter" :class="category == '' ? 'active' : ''" @click.prevent="getCategoryid('')">
                    {{ $t('All') }}
                </li>
                <li class="filter" v-for="(gallery, i) in galleries" :key="i" :class="category == gallery.id ? 'active' : ''" @click.prevent="getCategoryid(gallery.id)">
                     {{ gallery.name }}
                </li>
            </ul>
          </div>

          <div class="row project-gallery-item">
              <div class="col-md-6 col-lg-4 gallery-item "  v-for="(galleryItem, i) in galleryItems"  :key="i">
                <div class="gallery-item-content">
                  <div class="item-thumbnail" @click="singleGallery(galleryItem)">
                    <div class="img" v-lazy:background-image="`/uploads/${galleryItem.image}`"></div>
                    <div class="content-overlay">
                      <div class="content">
                        <div class="links">
                          <a v-if="galleryItem.video_link" class="img-popup image-preview " href="#">
                            <i class="fas fa-video"></i>
                          </a>
                          <a v-else class="img-popup image-preview">
                            <i class="far fa-image"></i>
                          </a>
                        </div>
                        <div class="info">
                          <h4 class="project-name">{{ galleryItem.title }}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
            <el-dialog
                :visible.sync="galleryDialog"
                :title="galleryContent.title"
                width="80%"
                center
            >
                <div class="text-center">
                    <div v-if="galleryContent.video_link">
                        <iframe width="560" height="315" :src="`https://www.youtube.com/embed/${galleryContent.video_link}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div v-else>
                        <img v-lazy="`/uploads/${galleryContent.image}`" alt="">
                    </div>
                </div>
            </el-dialog>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data(){
        return{
            category : '',
            galleryDialog : false,
            galleryContent : []
        }
    },

    methods: {
        ...mapActions({
            getGalleries: "index/getGalleries"
        }),
        actionGalleryItems(){
            this.$store.dispatch("index/getGalleryItems", this.category);
        },
        getCategoryid(id){
            this.category = id;
            this.$store.dispatch("index/getGalleryItems", id);
        },
        singleGallery(galleryItem){
            this.galleryContent = galleryItem;
            this.galleryDialog = true;
            // alert(galleryItem);
        }
    },
    computed: {
        ...mapGetters({
            galleries : "index/getGalleries",
            galleryItems : "index/getGalleryItems"
        })
    },
    created(){
        this.getGalleries();
        this.actionGalleryItems();
    }
};
</script>



