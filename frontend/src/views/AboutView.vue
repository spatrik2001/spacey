<template>
  <div class="about">
    <div class="p-5 text-center">
      <div class="container h-100">

          <div class="d-flex justify-content-center align-items-center h-100">
              <div class="col-lg-10 text-center">
                  <h1>Rólunk</h1>
                  <hr class="divider my-4">
                  <div class="row">
                    <div class="col">
                      <img class="img-fluid" src="../assets/img/gallery-sy-04.png" alt="about">
                    </div>
                    <div class="col">
                      <p class="font-weight-light mt-5 mb-2">A SpaceY fő célja kezdetektől fogva az űrrepülés költségeinek leszorítása, valamint a Naprendszer kolonizációjának lehetővé tétele.</p>
                      <p class="font-weight-light mb-5">Vállalatunkat 2018-ban kezdtük meg, és rövid idővel utána nagy hírnévre tettünk szerta Turul 2 rakétánkkal, amely lehetővé teszi a Naprendszerben történő gyors utazást.</p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  created() {
    document.title = 'SpaceY · Rólunk';
  }
}
</script>
