(function(b){var c=b.treeview.classes;var a=b.fn.treeview;b.fn.treeview=function(d){d=b.extend({},d);if(d.add){return this.trigger("add",[d.add])}if(d.remove){return this.trigger("remove",[d.remove])}return a.apply(this,arguments).bind("add",function(f,e){b(e).prev().removeClass(c.last).removeClass(c.lastCollapsable).removeClass(c.lastExpandable).find(">.hitarea").removeClass(c.lastCollapsableHitarea).removeClass(c.lastExpandableHitarea);b(e).find("li").andSelf().prepareBranches(d).applyClasses(d,b(this).data("toggler"))}).bind("remove",function(h,e){var g=b(e).prev();var f=b(e).parent();b(e).remove();g.filter(":last-child").addClass(c.last).filter("."+c.expandable).replaceClass(c.last,c.lastExpandable).end().find(">.hitarea").replaceClass(c.expandableHitarea,c.lastExpandableHitarea).end().filter("."+c.collapsable).replaceClass(c.last,c.lastCollapsable).end().find(">.hitarea").replaceClass(c.collapsableHitarea,c.lastCollapsableHitarea);if(f.is(":not(:has(>))")&&f[0]!=this){f.parent().removeClass(c.collapsable).removeClass(c.expandable);f.siblings(".hitarea").andSelf().remove()}})}})(jQuery);